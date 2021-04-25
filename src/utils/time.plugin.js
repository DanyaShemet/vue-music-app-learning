export const parseTime = time => {
    const seconds = String(Math.floor(time  % 60) || 0).padStart('2' , '0')
    const minutes = String(Math.floor(time  / 60) || 0).padStart('1' , '0')
    return `${minutes}:${seconds}`
}