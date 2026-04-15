export type Lang = 'es' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  es: {
    'meta.title': 'PortKill — Mata puertos. Desde tu menu bar.',
    'meta.description': 'Monitorea puertos TCP en escucha y mata procesos con un click. App nativa de menu bar para macOS. Sin dependencias, sin configuracion.',
    'meta.og.title': 'PortKill — Mata puertos. Desde tu menu bar.',
    'meta.og.description': 'Monitorea puertos TCP en escucha y mata procesos con un click.',
    'nav.features': 'Funciones',
    'nav.screenshots': 'Capturas',
    'nav.download': 'Descarga',
    'toggle.lang': 'EN',
    'hero.eyebrow': 'UTILIDAD NATIVA PARA MACOS',
    'hero.title': 'Mata puertos.<br/>Desde tu menu bar.',
    'hero.sub': 'Monitorea cada socket TCP en escucha en tu Mac. Identifica el proceso. Terminalo. Un click.',
    'hero.cta.mac': 'Descargar para macOS',
    'hero.pill': 'v0.1.0 — macOS 14.0+',
    'hero.preview.alt': 'PortKill mostrando la lista de puertos TCP en escucha con proceso, PID y boton KILL',
    'features.eyebrow': 'FUNCIONES',
    'features.title': 'Herramientas precisas. Sin sobrecarga.',
    'feature.monitor.title': 'Monitor de Puertos',
    'feature.monitor.desc': 'Escanea todos los sockets TCP LISTEN via lsof. PID, puerto, protocolo, direccion — todo visible de un vistazo.',
    'feature.kill.title': 'Kill con un Click',
    'feature.kill.desc': 'Selecciona un proceso, confirma, SIGTERM. Sin terminal, sin sudo, sin adivinar que PID matar.',
    'feature.refresh.title': 'Auto-Refresco',
    'feature.refresh.desc': 'Escanea cada 2 segundos. Los puertos nuevos se resaltan en verde. Los cerrados desaparecen. Siempre actualizado.',
    'feature.tabs.title': 'Pestanas Local y System',
    'feature.tabs.desc': 'Filtra entre tus servidores de desarrollo y los procesos del sistema.',
    'feature.details.title': 'Detalles del Proceso',
    'feature.details.desc': 'PID, usuario, badge de protocolo, direccion enlazada — todo en monospace.',
    'feature.confirm.title': 'Confirmacion de Kill',
    'feature.confirm.desc': 'Modal con detalles completos del proceso antes de terminar. Sin kills accidentales.',
    'feature.menubar.title': 'Nativo del Menu Bar',
    'feature.menubar.desc': 'Vive en el menu bar. Sin icono en el Dock. Sin ventana. Siempre accesible.',
    'feature.brutalist.title': 'UI Brutalista',
    'feature.brutalist.desc': 'Bordes duros, datos en monospace, botones rojos. La forma sigue la funcion.',
    'feature.zero.title': 'Cero Dependencias',
    'feature.zero.desc': 'Swift 6 + SwiftUI puro. Sin Homebrew, sin frameworks, sin bloat.',
    'feature.macos.title': 'macOS 14+',
    'feature.macos.desc': 'Construido para macOS moderno con concurrencia estricta y hardened runtime.',
    'screenshots.eyebrow': 'EN ACCION',
    'screenshots.title': 'Ve lo que estas matando.',
    'screenshot.list.caption': 'Lista de Puertos',
    'screenshot.list.alt': 'PortKill mostrando 5 puertos TCP en escucha con node, python3, postgres, redis y vite',
    'screenshot.kill.caption': 'Confirmacion de Kill',
    'screenshot.kill.alt': 'Modal de confirmacion de kill mostrando detalles del proceso python3 en el puerto 8000',
    'screenshot.tabs.caption': 'Pestana System',
    'screenshot.tabs.alt': 'Pestana System mostrando procesos del sistema con badge SYSTEM en vez del boton KILL',
    'screenshot.empty.caption': 'Estado Vacio',
    'screenshot.empty.alt': 'Estado vacio de PortKill mostrando que no hay puertos en escucha',
    'download.eyebrow': 'EMPIEZA YA',
    'download.title': 'Descarga PortKill',
    'download.sub': 'Gratuito, open-source, solo para macOS.',
    'download.mac.desc': 'macOS 14.0 (Sonoma) o posterior',
    'download.mac.btn': 'Descargar .dmg',
    'download.source': 'O <a href="https://github.com/AngoZero/portkill" target="_blank" rel="noopener">compilar desde el codigo fuente en GitHub</a>',
    'download.note': 'Build sin firmar — se espera aviso de macOS Gatekeeper. Clic derecho → Abrir en el primer lanzamiento.',
    'tech.label': 'Hecho con',
    'footer.copy': '© 2026 angozero. Todos los derechos reservados.',
  },
  en: {
    'meta.title': 'PortKill — Kill ports. From your menu bar.',
    'meta.description': 'Monitor TCP listening ports and kill processes with one click. Native macOS menu bar app. No dependencies, no setup.',
    'meta.og.title': 'PortKill — Kill ports. From your menu bar.',
    'meta.og.description': 'Monitor TCP listening ports and kill processes with one click.',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.download': 'Download',
    'toggle.lang': 'ES',
    'hero.eyebrow': 'NATIVE MACOS MENU BAR UTILITY',
    'hero.title': 'Kill ports.<br/>From your menu bar.',
    'hero.sub': 'Monitor every TCP listening socket on your Mac. Spot the process. Terminate it. One click.',
    'hero.cta.mac': 'Download for macOS',
    'hero.pill': 'v0.1.0 — macOS 14.0+',
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
    'feature.zero.title': 'Zero Dependencies',
    'feature.zero.desc': 'Pure Swift 6 + SwiftUI. No Homebrew, no frameworks, no bloat.',
    'feature.macos.title': 'macOS 14+',
    'feature.macos.desc': 'Built for modern macOS with strict concurrency and hardened runtime.',
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
    'download.sub': 'Free, open-source, macOS only.',
    'download.mac.desc': 'macOS 14.0 (Sonoma) or later',
    'download.mac.btn': 'Download .dmg',
    'download.source': 'Or <a href="https://github.com/AngoZero/portkill" target="_blank" rel="noopener">build from source on GitHub</a>',
    'download.note': 'Unsigned build — macOS Gatekeeper warning expected. Right-click → Open on first launch.',
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
