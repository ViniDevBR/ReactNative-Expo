/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

const urlVini = 'http://192.168.0.117:4000'
const urlRafa = 'http://192.168.0.9:4000'
const urlThatto = 'http://192.168.0.9:4000'

//ABRA O CMD DO PC E DIGITE ---> IPCONFIG e jogue o endereço do piv4 na sua url e depois coloque a na globalUrl
//NECESSARIO TROCAR A URL TBB NO JSON SERVER


export const globalUrl = urlVini

export const api = axios.create({
  baseURL: globalUrl
})