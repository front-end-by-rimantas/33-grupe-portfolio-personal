const itemsPerPage = 6

renderProjectFilters(categories)
renderGallery(projects, categories, itemsPerPage)
let activeFilter = document.querySelector('.gallery .filters li.filter-active')
const ul = document.querySelector('.filters')
ul.addEventListener('click', (e) => {
    activeFilter = document.querySelector('.gallery .filters li.filter-active')
    activeFilter.classList.remove('filter-active')

    let target = e.target
    target.classList.add('filter-active')

    let category = target.getAttribute('filter-data')
    let data = getGalleryData(projects, category)
    renderGallery(data, categories, itemsPerPage)
})


