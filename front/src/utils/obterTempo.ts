export function TimeStamp(): string {
    const date = new Date();
    
    // Obter as partes da data no horário UTC
    const year = date.getUTCFullYear();
    const month = ('00' + (date.getUTCMonth() + 1)).slice(-2); // Mês começa do 0, então somamos 1
    const day = ('00' + date.getUTCDate()).slice(-2);
    const hours = ('00' + date.getUTCHours()).slice(-2);
    const minutes = ('00' + date.getUTCMinutes()).slice(-2);
    const seconds = ('00' + date.getUTCSeconds()).slice(-2);

    // Formatar o timestamp no formato UTC (YYYY-MM-DD HH:MM:SS)
    const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    return timestamp;
}
/*
export function convertToLocalTime(utcTimestamp: string): string {
    const date = new Date(utcTimestamp + ' UTC'); // Adiciona ' UTC' para garantir que a data seja interpretada como UTC
    const localYear = date.getFullYear();
    const localMonth = ('00' + (date.getMonth() + 1)).slice(-2);
    const localDay = ('00' + date.getDate()).slice(-2);
    const localHours = ('00' + date.getHours()).slice(-2);
    const localMinutes = ('00' + date.getMinutes()).slice(-2);
    const localSeconds = ('00' + date.getSeconds()).slice(-2);

    // Retorna a data no fuso horário local
    return `${localYear}-${localMonth}-${localDay} ${localHours}:${localMinutes}:${localSeconds}`;
}*/
