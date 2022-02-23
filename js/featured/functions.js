function renderProjectFilters(data) {
    let HTML = '<li class="filter-item filter-active all" filter-data="*">All</li>'

    for (let i = 0; i < data.length-2; i++) {
        HTML += `<li class="filter-item" filter-data=${data[i].id}>${data[i].name}</li>`
    }

    return document.querySelector(".filters").innerHTML = HTML;
}

function getGalleryData(data, category) {
    let galleryItems = []
    if (category === '*') {
        return data
    }
    data.map((item) => {
        if (item.category_id == category) {
            galleryItems.push(item)
        }
    })
    return galleryItems
}

function renderGallery(data, categories, itemsPerPage) {
    let HTML = ''
    for (let i = 0; i < itemsPerPage; i++) {
        if (data.length < itemsPerPage) {
            itemsPerPage = data.length
        }
        let catName = ''
        for (let j = 0; j < categories.length; j++) {
            if (data[i].category_id === categories[j].id) {
                catName = categories[j].name
            }
        }

        HTML += `<div class="f-content">
                        <div class="thumb">
                            <div class="img-overlay"></div>
                            <img src="./img/projects/${data[i].image}" alt="${data[i].image}">
                            <a href="#" class="cont-link fa fa-unlock-alt"></a>
                        </div>
                        <div class="cont-description">
                            <h4>${data[i].title}</h4>
                            <p class="c-category">${catName}</p>
                        </div>
                    </div>`
    }


    return document.querySelector(".filters-content").innerHTML = HTML;

}


