const profileCard = document.getElementById('profileCard');
const profileName = document.getElementById('profileName');
const profileProgram = document.getElementById('profileProgram');
const profileYear = document.getElementById('profileYear');
const profileStatus = document.getElementById('profileStatus');
const detailsPanel = document.getElementById('detailsPanel');
const studentIdDisplay = document.getElementById('studentIdDisplay');
const formMessage = document.getElementById('formMessage');
const nameInput = document.getElementById('nameInput');
const programInput = document.getElementById('programInput');
const yearInput = document.getElementById('yearInput');
const statusInput = document.getElementById('statusInput');
const updateBtn = document.getElementById('updateBtn');
const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
const themeBtn = document.getElementById('themeBtn');
const resetBtn = document.getElementById('resetBtn');
const controls = document.querySelector('.controls');

const INITIAL = {
  name: 'Maria Santos',
  program: 'BS Information Technology',
  year: '3rd Year',
  statusText: 'Active',
  statusValue: 'active',
  studentId: '2026-001'
};

function isValidStudentName(name) {
  return name.trim().length >= 2;
}

function formatStudentStatus(status) {
  return status === 'active' ? 'Active' : 'Inactive';
}

function setStatus(status) {
  if (!profileStatus || !profileCard) return;
  profileStatus.textContent = formatStudentStatus(status);
  profileCard.dataset.status = status;
  if (status === 'active') {
    profileCard.classList.remove('inactive');
    profileCard.classList.add('active');
  } else {
    profileCard.classList.remove('active');
    profileCard.classList.add('inactive');
  }
}

function updateProfile() {
  if (!profileName || !profileProgram || !profileYear || !formMessage) return;
  formMessage.textContent = '';
  const newName = nameInput.value;
  const newProgram = programInput.value;
  const newYear = yearInput.value;
  const newStatus = statusInput.value;
  if (!isValidStudentName(newName)) {
    formMessage.textContent = 'Student name is required';
    return;
  }
  profileName.textContent = newName.trim();
  profileProgram.textContent = newProgram;
  profileYear.textContent = newYear;
  setStatus(newStatus);
}

function toggleDetails() {
  if (!detailsPanel) return;
  detailsPanel.classList.toggle('hidden');
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function resetProfile() {
  if (!profileName || !profileProgram || !profileYear || !profileStatus) return;
  profileName.textContent = INITIAL.name;
  profileProgram.textContent = INITIAL.program;
  profileYear.textContent = INITIAL.year;
  profileStatus.textContent = INITIAL.statusText;
  studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;
  nameInput.value = INITIAL.name;
  programInput.value = INITIAL.program;
  yearInput.value = INITIAL.year;
  statusInput.value = INITIAL.statusValue;
  setStatus(INITIAL.statusValue);
  detailsPanel.classList.remove('hidden');
  document.body.classList.remove('dark-theme');
  formMessage.textContent = '';
}

updateBtn.addEventListener('click', updateProfile);
toggleDetailsBtn.addEventListener('click', toggleDetails);
themeBtn.addEventListener('click', toggleTheme);
resetBtn.addEventListener('click', resetProfile);

studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;