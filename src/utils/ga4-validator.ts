// GA4 Debug y Validación para Glover
// Este script ayuda a verificar que los eventos se envían correctamente

export class GA4Validator {
  private debugMode: boolean;
  private eventLog: Array<{
    timestamp: string;
    event: string;
    parameters: any;
    status: 'sent' | 'error';
  }> = [];

  constructor(debugMode = false) {
    this.debugMode = debugMode;
    this.setupDebugListeners();
  }

  // Configurar listeners para capturar eventos
  private setupDebugListeners() {
    if (this.debugMode && typeof window !== 'undefined') {
      // Interceptar llamadas a gtag
      const originalGtag = (window as any).gtag;
      (window as any).gtag = (...args: any[]) => {
        this.logEvent(args);
        if (originalGtag) {
          return originalGtag.apply(window, args);
        }
      };

      console.log('🔍 GA4 Debug Mode activado para Glover');
    }
  }

  // Registrar eventos para debugging
  private logEvent(args: any[]) {
    const [command, eventName, parameters] = args;
    
    if (command === 'event') {
      const logEntry = {
        timestamp: new Date().toISOString(),
        event: eventName,
        parameters: parameters || {},
        status: 'sent' as const
      };

      this.eventLog.push(logEntry);

      if (this.debugMode) {
        console.group('📊 GA4 Event Sent');
        console.log('Event:', eventName);
        console.log('Parameters:', parameters);
        console.log('Timestamp:', logEntry.timestamp);
        console.groupEnd();
      }
    }
  }

  // Validar eventos específicos de Glover
  public validateGloverEvents(): ValidationReport {
    const report: ValidationReport = {
      totalEvents: this.eventLog.length,
      businessLineEvents: 0,
      contactEvents: 0,
      navigationEvents: 0,
      sustainabilityEvents: 0,
      errors: [],
      recommendations: []
    };

    this.eventLog.forEach(log => {
      switch (log.event) {
        case 'business_line_view':
          report.businessLineEvents++;
          this.validateBusinessLineEvent(log, report);
          break;
        case 'contact_form_submit':
          report.contactEvents++;
          this.validateContactEvent(log, report);
          break;
        case 'navigation_click':
          report.navigationEvents++;
          break;
        case 'sustainability_impact_view':
        case 'sustainability_certification_view':
          report.sustainabilityEvents++;
          break;
      }
    });

    this.generateRecommendations(report);
    return report;
  }

  // Validar eventos de líneas de negocio
  private validateBusinessLineEvent(log: any, report: ValidationReport) {
    const validBusinessLines = ['doors', 'furniture', 'wood', 'structures', 'complements'];
    
    if (!log.parameters.business_line) {
      report.errors.push(`Evento business_line_view sin parámetro business_line (${log.timestamp})`);
    } else if (!validBusinessLines.includes(log.parameters.business_line)) {
      report.errors.push(`business_line inválida: ${log.parameters.business_line} (${log.timestamp})`);
    }
  }

  // Validar eventos de contacto
  private validateContactEvent(log: any, report: ValidationReport) {
    const requiredParams = ['form_type', 'page_location'];
    
    requiredParams.forEach(param => {
      if (!log.parameters[param]) {
        report.errors.push(`Evento contact_form_submit sin ${param} (${log.timestamp})`);
      }
    });
  }

  // Generar recomendaciones
  private generateRecommendations(report: ValidationReport) {
    if (report.businessLineEvents === 0) {
      report.recommendations.push('No se detectaron eventos de líneas de negocio. Verificar implementación en BusinessLines component.');
    }

    if (report.contactEvents === 0) {
      report.recommendations.push('No se detectaron eventos de contacto. Verificar formularios de contacto.');
    }

    if (report.sustainabilityEvents === 0) {
      report.recommendations.push('Considera agregar más eventos de sostenibilidad para medir engagement.');
    }

    if (report.totalEvents < 10) {
      report.recommendations.push('Pocos eventos detectados. Verificar que GA4 esté activo y configurado correctamente.');
    }
  }

  // Obtener reporte de eventos
  public getEventLog() {
    return this.eventLog;
  }

  // Limpiar log de eventos
  public clearLog() {
    this.eventLog = [];
  }

  // Exportar eventos para análisis
  public exportEvents() {
    const csvContent = this.eventLog.map(log => 
      `${log.timestamp},${log.event},"${JSON.stringify(log.parameters)}",${log.status}`
    ).join('\n');

    const header = 'timestamp,event,parameters,status\n';
    return header + csvContent;
  }
}

// Interfaces
interface ValidationReport {
  totalEvents: number;
  businessLineEvents: number;
  contactEvents: number;
  navigationEvents: number;
  sustainabilityEvents: number;
  errors: string[];
  recommendations: string[];
}

// Función de utilidad para testing manual
export function testGloverEvents() {
  console.log('🧪 Iniciando test de eventos Glover...');
  
  // Simular eventos de prueba
  const testEvents = [
    {
      name: 'business_line_view',
      params: { business_line: 'furniture', component: 'BusinessLines' }
    },
    {
      name: 'contact_form_submit',
      params: { form_type: 'contact', page_location: '/contact' }
    },
    {
      name: 'navigation_click',
      params: { link_text: 'Sobre Nosotros', destination: '/about' }
    },
    {
      name: 'sustainability_impact_view',
      params: { metric_type: 'certified_wood', component: 'Impact' }
    }
  ];

  testEvents.forEach((event, index) => {
    setTimeout(() => {
      if (typeof gtag !== 'undefined') {
        gtag('event', event.name, event.params);
        console.log(`✅ Evento ${event.name} enviado`);
      } else {
        console.error('❌ gtag no está disponible');
      }
    }, index * 1000);
  });

  console.log('🎯 Test completado. Revisa la consola y GA4 DebugView');
}

// Configuración para modo desarrollo
export function setupGloverDebug() {
  if (import.meta.env.DEV) {
    const validator = new GA4Validator(true);
    
    // Hacer disponible globalmente para debugging
    (window as any).gloverGA4 = {
      validator,
      test: testGloverEvents,
      report: () => validator.validateGloverEvents(),
      export: () => validator.exportEvents()
    };

    console.log('🔧 Glover GA4 Debug configurado. Usa window.gloverGA4 para testing');
  }
}
