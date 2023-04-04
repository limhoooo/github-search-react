import { searchType } from './../type/searchType';
const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};

export const sortByDate = (data: searchType[], type: string): any[] => {
  return data.sort((a: any, b: any): number => {
    const dateA = parseDate(a[type]);
    const dateB = parseDate(b[type]);
    return dateA.getTime() - dateB.getTime();
  });
};

export const parseDateTime = (date: string) => {
  const dateTime = new Date(date);
  dateTime.setHours(dateTime.getHours() + 9);
  return dateTime.toISOString().replace('T', ' ').substring(0, 19);
};
