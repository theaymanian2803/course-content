const GIT_RESET_STEPS = [
  {
    id: 'step-1',
    step: '01',
    name: 'Remove Old Git History',
    filename: 'powershell',
    language: 'bash',
    description:
      'Forcefully remove the hidden .git directory to delete all previous commit history and remote connections.',
    code: `Remove-Item -Recurse -Force .git`,
  },
  {
    id: 'step-2',
    step: '02',
    name: 'Initialize New Repository',
    filename: 'powershell',
    language: 'bash',
    description:
      'Re-initialize a fresh Git repository in your project root and stage all existing files for the first commit.',
    code: `git init\ngit add .`,
  },
  {
    id: 'step-3',
    step: '03',
    name: 'Create Initial Commit',
    filename: 'powershell',
    language: 'bash',
    description:
      'Commit your staged files. This establishes the new "Main" branch as the starting point of your project history.',
    code: `git commit -m "Initial commit for new project"\ngit branch -M main`,
  },
  {
    id: 'step-4',
    step: '04',
    name: 'Connect to New GitHub',
    filename: 'powershell',
    language: 'bash',
    description:
      'Link your local repository to your new GitHub URL and perform the first push to the main branch.',
    code: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git\ngit push -u origin main`,
  },
]

export default GIT_RESET_STEPS
