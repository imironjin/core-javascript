

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

export const ironjin = async(options = {}) => {
// rest파라미터
  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers}
  }

  let response = await fetch(url,restOptions)

  if(response.ok) {
    response.data = await response.json()
  }

console.log(response)
  return response
}


ironjin.get = (url,options) => {
  return ironjin({
    url,
    ...options
  })
}

ironjin.post = (url,body,options) => {
  return ironjin({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

ironjin.put = (url,body,options) => {
  return ironjin({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

ironjin.delete = (url,options) => {
  return ironjin({
    method: 'DELETE',
    url,
    ...options
  })
}
