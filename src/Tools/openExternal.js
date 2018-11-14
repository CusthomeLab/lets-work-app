import {message} from 'antd'
const {shell} = window.require('electron')

const successMessage = () => {
  message.loading('Ouverture en cours...', 6).then(() => message.success('Ouverture de la page réussie'))
}

const errorMessage = () => {
  message.loading('Ouverture en cours...', 6).then(() => message.success("Échec de l'ouverture de la page"))
}

export default urls =>
  urls.map(url => shell.openExternal(url, {activate: false}, error => (error ? errorMessage() : successMessage())))
