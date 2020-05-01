export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;
  

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const mobileValidator = mobile => {
  const re = /^((0|\+234)8\d{3}\s?\d{6})$/
  if (!mobile || mobile.length <= 0) return 'mobile number cannot be empty.';
  if (!re.test(mobile)) return 'Ooops! We need a valid number.';

  return '';
};
