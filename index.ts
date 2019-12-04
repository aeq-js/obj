type Dto = { [key: string]: any }

export function objectMeetsCriteria (object: Dto, criteria: Dto): boolean {
  for (const index in criteria) {
    if (criteria[index] !== object[index]) {
      return false
    }
  }
  return true
}

export function objectDownloadAsJson (exportObj: { [key: string]: any }, fileName: string = 'file') {
  const exportName = fileName
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(
    JSON.stringify(exportObj))
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', exportName + '.json')
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}

export function objectMerge (target: Dto, source: Dto) {
  Object.keys(target).forEach((key: string) => {
    target[key] = source[key]
  })
}

export function objectFill (target: Dto, source: Dto) {
  Object.keys(source).forEach((key: string) => {
    target[key] = source[key]
  })
}
