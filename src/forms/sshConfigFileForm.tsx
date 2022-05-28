const sshConfigFileForm = [
  {
    name: 'host',
    displayName: 'Host',
    defaultValue: '',
    type: 'text',
    helperText: 'Will be used in git commands to add repo (git@[HOST.HOST.COM]:[username])',
    placeholder: 'personal.github.com',
  },
  {
    name: 'user',
    displayName: 'User',
    defaultValue: '',
    type: 'text',
    helperText: 'Just put git here.. dunno what happens otherwise',
    placeholder: 'git',
  },
  {
    name: 'hostname',
    displayName: 'Hostname',
    defaultValue: '',
    type: 'text',
    helperText: 'Dunno.. recommend to use github.com',
    placeholder: 'github.com',
  },
  {
    name: 'IdentityFile',
    displayName: 'IdentityFile',
    defaultValue: '',
    type: 'text',
    helperText: 'The filename of the SSH key created in ~/.ssh/',
    placeholder: 'github_personal',
  },
];
export default sshConfigFileForm;
