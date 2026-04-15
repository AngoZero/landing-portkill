export type Lang = 'es' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  es: {
    'meta.title': 'PortKill — Mata puertos. Desde tu menú bar.',
    'meta.description': 'Monitorea puertos TCP en escucha y mata procesos con un click. App de system tray para macOS y Windows. Sin dependencias, sin configuración.',
    'meta.og.title': 'PortKill — Mata puertos. Desde tu menú bar.',
    'meta.og.description': 'Monitorea puertos TCP en escucha y mata procesos con un click.',
    'nav.features': 'Funciones',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descarga',
    'toggle.lang': 'EN',
    'hero.eyebrow': 'UTILIDAD DE SYSTEM TRAY',
    'hero.title': 'Mata puertos.<br/>Desde tu menú bar.',
    'hero.sub': 'Monitorea cada socket TCP en escucha en tu Mac. Identifica el proceso. Termínalo. Un click.',
    'hero.cta.mac': 'Descargar para macOS',
    'hero.pill': 'v0.3.0 — macOS 14.0+',
    'hero.preview.alt': 'PortKill mostrando la lista de puertos TCP en escucha con proceso, PID y botón KILL',
    'features.eyebrow': 'FUNCIONES',
    'features.title': 'Herramientas precisas. Sin sobrecarga.',
    'feature.monitor.title': 'Monitor de Puertos',
    'feature.monitor.desc': 'Escanea todos los sockets TCP LISTEN vía lsof. PID, puerto, protocolo, dirección — todo visible de un vistazo.',
    'feature.kill.title': 'Kill con un Click',
    'feature.kill.desc': 'Selecciona un proceso, confirma, SIGTERM. Sin terminal, sin sudo, sin adivinar qué PID matar.',
    'feature.refresh.title': 'Auto-Refresco',
    'feature.refresh.desc': 'Escanea cada 2 segundos. Los puertos nuevos se resaltan en verde. Los cerrados desaparecen. Siempre actualizado.',
    'feature.tabs.title': 'Pestañas Local y System',
    'feature.tabs.desc': 'Filtra entre tus servidores de desarrollo y los procesos del sistema.',
    'feature.details.title': 'Detalles del Proceso',
    'feature.details.desc': 'PID, usuario, badge de protocolo, dirección enlazada — todo en monospace.',
    'feature.confirm.title': 'Confirmación de Kill',
    'feature.confirm.desc': 'Modal con detalles completos del proceso antes de terminar. Sin kills accidentales.',
    'feature.menubar.title': 'Nativo del Menú Bar',
    'feature.menubar.desc': 'Vive en el menú bar. Sin icono en el Dock. Sin ventana. Siempre accesible.',
    'feature.brutalist.title': 'UI Brutalista',
    'feature.brutalist.desc': 'Bordes duros, datos en monospace, botones rojos. La forma sigue la función.',
    'feature.zero.title': 'Sin Bloat',
    'feature.zero.desc': 'Tauri 2 + React + Rust. Sin instaladores adicionales, sin dependencias del sistema.',
    'feature.macos.title': 'macOS 14+',
    'feature.macos.desc': 'Construido para macOS moderno. Windows 10+ también soportado.',
    'screenshots.eyebrow': 'EN ACCIÓN',
    'screenshots.title': 'Ve lo que estás matando.',
    'screenshot.list.caption': 'Lista de Puertos',
    'screenshot.list.alt': 'PortKill mostrando 5 puertos TCP en escucha con node, python3, postgres, redis y vite',
    'screenshot.kill.caption': 'Confirmación de Kill',
    'screenshot.kill.alt': 'Modal de confirmación de kill mostrando detalles del proceso python3 en el puerto 8000',
    'screenshot.tabs.caption': 'Pestaña System',
    'screenshot.tabs.alt': 'Pestaña System mostrando procesos del sistema con badge SYSTEM en vez del botón KILL',
    'screenshot.empty.caption': 'Estado Vacío',
    'screenshot.empty.alt': 'Estado vacío de PortKill mostrando que no hay puertos en escucha',
    'download.eyebrow': 'EMPIEZA YA',
    'download.title': 'Descarga PortKill',
    'download.sub': 'Gratuito, open-source, macOS y Windows.',
    'download.mac.desc': 'macOS 14.0 (Sonoma) o posterior',
    'download.mac.btn': 'Descargar .dmg',
    'download.win.desc': 'Windows 10 o posterior',
    'download.win.btn': 'Descargar .msi',
    'download.install.title': 'INSTALACIÓN',
    'download.install.mac.step1': 'Descarga el .dmg y arrastra PortKill a Aplicaciones',
    'download.install.mac.step2': 'Abre Terminal y ejecuta:',
    'download.install.mac.step3': 'Abre PortKill normalmente',
    'download.install.win': 'Haz clic en «Más información» → «Ejecutar de todas formas» en el diálogo de SmartScreen',
    'download.install.note': 'Build open-source sin firma de Apple/Microsoft. Esto es normal para apps distribuidas fuera de las tiendas oficiales.',
    'tech.label': 'Hecho con',
    'footer.copy': '© 2026 angozero. Todos los derechos reservados.',
  },
  en: {
    'meta.title': 'PortKill — Kill ports. From your menu bar.',
    'meta.description': 'Monitor TCP listening ports and kill processes with one click. System tray app for macOS and Windows. No dependencies, no setup.',
    'meta.og.title': 'PortKill — Kill ports. From your menu bar.',
    'meta.og.description': 'Monitor TCP listening ports and kill processes with one click.',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'toggle.lang': 'ES',
    'hero.eyebrow': 'SYSTEM TRAY UTILITY',
    'hero.title': 'Kill ports.<br/>From your menu bar.',
    'hero.sub': 'Monitor every TCP listening socket on your Mac. Spot the process. Terminate it. One click.',
    'hero.cta.mac': 'Download for macOS',
    'hero.pill': 'v0.3.0 — macOS 14.0+',
    'hero.preview.alt': 'PortKill showing a list of TCP listening ports with process name, PID and KILL button',
    'features.eyebrow': 'FEATURES',
    'features.title': 'Sharp tools. Zero overhead.',
    'feature.monitor.title': 'Port Monitor',
    'feature.monitor.desc': 'Scans all TCP LISTEN sockets via lsof. PID, port, protocol, bound address — all visible at a glance.',
    'feature.kill.title': 'One-Click Kill',
    'feature.kill.desc': 'Select a process, confirm, SIGTERM. No terminal, no sudo, no guessing which PID to kill.',
    'feature.refresh.title': 'Auto-Refresh',
    'feature.refresh.desc': 'Polls every 2 seconds. New ports highlighted in green. Closed ports disappear. Always current.',
    'feature.tabs.title': 'Local & System Tabs',
    'feature.tabs.desc': 'Filter between your dev servers and system processes.',
    'feature.details.title': 'Process Details',
    'feature.details.desc': 'PID, user, protocol badge, bound address — all in monospace.',
    'feature.confirm.title': 'Kill Confirmation',
    'feature.confirm.desc': 'Modal with full process details before termination. No accidental kills.',
    'feature.menubar.title': 'Menu Bar Native',
    'feature.menubar.desc': 'Lives in the menu bar. No Dock icon. No window. Always accessible.',
    'feature.brutalist.title': 'Brutalist UI',
    'feature.brutalist.desc': 'Hard borders, monospace data, red kill buttons. Form follows function.',
    'feature.zero.title': 'No Bloat',
    'feature.zero.desc': 'Tauri 2 + React + Rust. No extra installers, no system dependencies.',
    'feature.macos.title': 'macOS 14+',
    'feature.macos.desc': 'Built for modern macOS. Windows 10+ also supported.',
    'screenshots.eyebrow': 'IN ACTION',
    'screenshots.title': 'See what you are killing.',
    'screenshot.list.caption': 'Port List',
    'screenshot.list.alt': 'PortKill showing 5 TCP listening ports with node, python3, postgres, redis and vite',
    'screenshot.kill.caption': 'Kill Confirmation',
    'screenshot.kill.alt': 'Kill confirmation modal showing full details of python3 process on port 8000',
    'screenshot.tabs.caption': 'System Tab',
    'screenshot.tabs.alt': 'System tab showing system processes with SYSTEM badge instead of KILL button',
    'screenshot.empty.caption': 'Empty State',
    'screenshot.empty.alt': 'PortKill empty state showing no ports are currently listening',
    'download.eyebrow': 'GET STARTED',
    'download.title': 'Download PortKill',
    'download.sub': 'Free, open-source, macOS and Windows.',
    'download.mac.desc': 'macOS 14.0 (Sonoma) or later',
    'download.mac.btn': 'Download .dmg',
    'download.win.desc': 'Windows 10 or later',
    'download.win.btn': 'Download .msi',
    'download.install.title': 'INSTALLATION',
    'download.install.mac.step1': 'Download the .dmg and drag PortKill to Applications',
    'download.install.mac.step2': 'Open Terminal and run:',
    'download.install.mac.step3': 'Open PortKill normally',
    'download.install.win': 'Click "More info" → "Run anyway" on the SmartScreen dialog',
    'download.install.note': 'Open-source build without Apple/Microsoft signing. This is normal for apps distributed outside official stores.',
    'tech.label': 'Built with',
    'footer.copy': '© 2026 angozero. All rights reserved.',
  },
};

export function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang') as Lang | null;
  if (stored === 'es' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function applyLanguage(lang: Lang): void {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n]')) {
    const key = el.dataset.i18n!;
    if (dict[key]) el.textContent = dict[key];
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-html]')) {
    const key = el.dataset.i18nHtml!;
    if (dict[key]) el.innerHTML = dict[key];
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-alt]')) {
    const key = el.dataset.i18nAlt!;
    if (dict[key]) el.setAttribute('alt', dict[key]);
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-content]')) {
    const key = el.dataset.i18nContent!;
    if (!dict[key]) continue;
    if (el.tagName === 'TITLE') {
      el.textContent = dict[key];
    } else {
      el.setAttribute('content', dict[key]);
    }
  }

  localStorage.setItem('lang', lang);
}
