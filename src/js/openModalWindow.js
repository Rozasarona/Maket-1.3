function openModalWindow(classModal, classModalVisible) {
    let modalWindow = document.querySelector(`.${classModal}`);
    let blur = document.querySelector('.blur');
    let html = document.querySelector('html');
    let body = document.querySelector('body');
    let sidebar = document.querySelector('.sidebarcontainer');
    
    return () => {
        blur.classList.add('blur_visible');
        modalWindow.classList.add(classModalVisible);
        html.classList.add('no-scroll');
        body.classList.add('no-scroll');
        sidebar.classList.remove('sidebarcontainer_visible');
    };

}
export default openModalWindow;