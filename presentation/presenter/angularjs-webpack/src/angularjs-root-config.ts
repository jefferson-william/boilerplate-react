import 'single-spa-react'
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout'
import microfrontendLayout from './microfrontend-layout.html'

function setNewSystemjsImportmapScript(contentObject) {
  const content = JSON.stringify(contentObject)
  const script = document.createElement('script')
  script.type = 'systemjs-importmap'
  script.innerText = content
  document.body.appendChild(script)
}

async function run() {
  let file: string
  let newSystemjsImportmapContent: any = { imports: {} }
  const response = await await fetch('http://localhost:4000/asset-manifest.json')
  const manifest = await response.json()
  for (file in manifest.files) {
    const path =
      process.env.NODE_ENV === 'production' ? manifest.files[file] : `http://localhost:4000${manifest.files[file]}`

    newSystemjsImportmapContent.imports[file.replace(/.js$/, '')] = path
  }
  console.log(newSystemjsImportmapContent)
  setNewSystemjsImportmapScript(newSystemjsImportmapContent)
  const { registerApplication, start } = await import('single-spa')
  registerExternalsComponents(registerApplication)
  execute(registerApplication, start)
}

function registerExternalsComponents(registerApplication) {
  // registerApplication(
  //   '@app/react-button',
  //   () => System.import('@app/react-button'),
  //   (location) => location.pathname === '/react',
  // )
}

async function execute(registerApplication, start) {
  const routes = constructRoutes(microfrontendLayout)
  const applications = constructApplications({
    routes,
    loadApp({ name }) {
      return System.import(name)
    },
  })
  const layoutEngine = constructLayoutEngine({ routes, applications })
  applications.forEach(registerApplication)
  layoutEngine.activate()
  start()
}

run()
