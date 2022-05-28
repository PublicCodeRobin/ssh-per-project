export type SnippetOut = {
  email: string,
  username: string,
  repository: string,
  remote: string,
}

export const defaultSnippetOut: SnippetOut = {
  email: '[youremail@example.com]',
  username: '[GitUsername]',
  repository: '[myrepo].git',
  remote: '[origin or something]',
};

export type FileOut = {
  email: string,
  username: string,
  repository: string,
  remote: string,
}

export const defaultFileOut: FileOut = {
  email: '',
  username: '',
  repository: '',
  remote: '',
};

