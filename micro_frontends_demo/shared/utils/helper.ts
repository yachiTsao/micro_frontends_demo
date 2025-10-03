export function formatDate(date: Date, format: string): string {
    const options: Intl.DateTimeFormatOptions = {};

    if (format.includes('YYYY')) options.year = 'numeric';
    if (format.includes('MM')) options.month = '2-digit';
    if (format.includes('DD')) options.day = '2-digit';

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function generateUniqueId(prefix: string = 'id'): string {
    return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}