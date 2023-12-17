
export const validFullName = function (fullName: string) {
  let regFullName = /^([ёЁ\sA-zА-я -]*)$/i
  if (!regFullName.test(fullName)) {
    return false
  } else {
    return true
  }
}

export const validPhone = function (phone: string) {
  let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  if (!regPhone.test(phone)) {
    return false
  } else {
    return true
  }
}

export const validEmail = function (email: string) {
  let regEmail = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/
  if (!regEmail.test(email)) {
    return false
  } else {
    return true
  }
}


export const validComment = function (comment: string) {
  if (comment.length <= 120) {
    console.log('=ff3414=', "< 120")
    return true
  } else {
    console.log('=ff3414=', "> 120")
    return false
  }
}