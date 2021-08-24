function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name);
    checkboxes.forEach((item) => {
        item.checked = false
    })
    checkbox.checked = true
}