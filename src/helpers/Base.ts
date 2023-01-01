const APP_NAME = `Infomerics`;

export function SET_PAGE_TITLE(title:string) {
  document.title = `${title} - ${APP_NAME}`;
  return true;
}