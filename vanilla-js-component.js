(()=> {
  const Parts = {
    button: {
      tagName: 'btn',
      init(btn) {
        btn.addEventListener('click', () => {
          btn.textContent++;
          if (btn.textContent > 10) {
            btn.setAttribute('class', 'red')
          }
        })
      },
      getAll(container = document.body) {
        return container.getElementsByTagName(this.tagName);
      }
    },
    button2: {
      tagName: 'btn2',
      init(btn) {
        btn.addEventListener('click', () => {
          btn.textContent++;
          if (btn.textContent > 10) {
            btn.setAttribute('class', 'red')
          }
        })
      },
      getAll(container = document.body) {
        return container.getElementsByTagName(this.tagName);
      }
    }
  }
  console.log(Parts)
  for (let part in Parts) {
    [...Parts[part].getAll()].forEach(pc => {
      Parts[part].init(pc)
    })

    // [...part.getAll()].forEach(item => {
    //   part.init(item)
    // });
  }
})()
