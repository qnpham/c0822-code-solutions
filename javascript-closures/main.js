function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
console.log('medicalSchool:', medicalSchool('Quan Pham'));
console.log('lawSchool:', lawSchool('Quan Pham'));
