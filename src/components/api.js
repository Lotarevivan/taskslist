function getRandomInt() {
  //сгенерить айди
  return Math.floor(Math.random() * 1000)
}

/**
 * Создать задачу.
 *
 * @param {object}  обьект задачи.
 * {name: 'Some value', dateEnd: '12 мая 2022', description: 'asdasdasd', status: 'Остальное'}
 * @return {Promise} респонс.
 */
async function createTask(task) {
  // return fetch(`/tasks/${taskId}`,{
  //     method:'POST'
  // })
  // Ожидается что вернется респонс с добавленным айди для дальнеший манипуляций
  task.id = getRandomInt()
  return new Promise((resolve, reject) => {
    //имитация отправки
    setTimeout(() => {
      if (Math.random() > 0.01) {
        resolve(task)
      } else {
        reject(task)
      }
    }, 250)
  })
}

/**
 * Удадяет задачу по ее айди.
 *
 * @param {taskId}  айди задания.
 * @return {Promise} респонс.
 */
async function deleteTask(taskId) {
  // return fetch(`/tasks/${taskId}`,{
  //     method:'DELETE'
  // })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.01) {
        resolve(taskId)
      } else {
        reject(taskId)
      }
    }, 250)
  })
}

/**
 * документы к задаче.
 *
 * @param {taskId}  айди задания.
 * @param {files}  массив файлов.
 * @return {Promise} респонс.
 */
async function addFilesToTask(taskId, files) {
  // let form = new FormData();
  // form.append('files', files);
  // form.append('taslID', taskId);
  // return fetch(`/comments`,{ // допустим
  //     method:'POST'
  // })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.01) {
        resolve({ taskId, files })
      } else {
        reject({ taskId, files })
      }
    }, 250)
  })
}

export { deleteTask, createTask, addFilesToTask }
