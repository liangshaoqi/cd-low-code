
/**
 * 设置session
 * @export
 * @param {string} key
 * @param {*} data
 */
export function sessionSet(key: string, data: any): void {
  console.log(key, data)
  sessionStorage.setItem(key, JSON.stringify(data))
}


/**
 * 获取session
 * @export
 * @param {string} key
 * @returns {*}
 */
export function sessionGet(key: string): any {
  let value = sessionStorage.getItem(key)
  if (value === null) return undefined
  return JSON.parse(value)
}

/**
 * 设置localStorage
 * @export
 * @param {string} key
 * @param {*} data
 */
 export function localStorageSet(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data))
}

/**
 * 获取localStorage
 * @export
 * @param {string} key
 * @returns {*}
 */
 export function localStorageGet(key: string): any {
  let value = localStorage.getItem(key)
  if (value === null) return undefined
  return JSON.parse(value)
}

/**
 * 构建formData
 *
 * @export
 * @param {*} obj
 * @returns {*}
 */
export function buildFormData(obj: any): any {
  const fm = new FormData()
  Object.keys(obj).forEach((key) => {
    fm.append(key, obj[key])
  })
  return fm
}

/**
 * 将参数添加到 URL
 * @param url url
 * @param params 参数
 */
export function appendUrlParams(url: string, params: any): string {
  const paramString = new URLSearchParams(params).toString()
  if (paramString) {
    if (url.lastIndexOf('?') >= 0) {
      if (url.endsWith('&')) {
        url += paramString
      } else {
        url += '&' + paramString
      }
    } else {
      url += '?' + paramString
    }
  }
  return url
}

export function RGBToHex(r: number, g: number, b: number): string {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
}


/**
 * 将数据处理成value和label数组类型
 * 
 * @export
 * @param {any[]} sourceData 数据源数组
 * @param {string} value
 * @param {string} label
 * @returns 
 */
export function getKVBySource(sourceData: any[] | any, value: string, label: string): any {
  return sourceData.map((item: any) => {
    return {
      ...item,
      value: item[value],
      label: item[label],
      children: item.children ? getKVBySource(item.children, value, label) : []
    }
  })
}

// 替换disabled => isDisabled
export function repliceDisabled(sourceData: any[]): any[] {
  return sourceData.map((item) => {
    let obj = {
      ...item,
      isDisabled: item.disabled,
      children: item.children ? repliceDisabled(item.children) : []
    }
    // 删除disabled
    delete obj.disabled
    return obj
  })
}


// 获取tree中符合条件的项(第一项)
export function treeFind (tree: any[], fn: (item: any) => {}): any {
  for (const item of tree) {
    if (fn(item)) return item
    if (item.children) {
      const res = treeFind(item.children, fn)
      if (res) return res
    }
  }
  return null
}

// 数组交换元素
export function swapItems(arr: any[], index1: number, index2: number) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}

// 上移
export function moveUp(arr: any[], index: number) {
  if (index === 0) return arr
  return swapItems(arr, index, index - 1)
}

// 下移
export function moveDown(arr: any[], index: number) {
  if (index === arr.length - 1) return arr
  return swapItems(arr, index, index + 1)
}

export function treeEach(treeData: any[], handler: Function, depth: number = 0) {
  const queue: any[] = [...treeData]
  const path = []
  while (queue.length) {
    const item: any = queue.shift()
    handler(item)
    const children = item.children || []
    if (children.length) {
      if (depth <= 0 || path.length + 1 < depth) {
        for (let i = children.length - 1; i >= 0; i--) {
          queue.unshift(children[i])
        }
        path.push(item)
      }
    } else if (path.length) {
      const last = path[path.length - 1]
      if (item === last) {
        path.pop()
      }
    }
  }
}
