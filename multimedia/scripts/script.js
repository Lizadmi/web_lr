document.addEventListener("DOMContentLoaded", () => {
    let draggedItem = null;
    let originContainer = null;
  
    // Перемещение между контейнерами
    const containers = document.querySelectorAll(".container");
    containers.forEach(container => {
      container.addEventListener("dragover", (e) => e.preventDefault());
  
      container.addEventListener("drop", (e) => {
        if (!draggedItem) return;
  
        const targetContainer = e.currentTarget;
        const isRestricted = draggedItem.classList.contains("restricted");
        const originData = originContainer.dataset.container;
        const targetData = targetContainer.dataset.container;
  
        // Проверки
        if (isRestricted && targetData === "3") {
          alert("Этот элемент нельзя перемещать в Контейнер 3!");
          return;
        }
        if (originData === targetData) {
          alert("Нельзя вернуть элемент в тот же контейнер!");
          return;
        }
  
        targetContainer.appendChild(draggedItem);
        draggedItem = null;
      });
    });
  
    // Перемещение альбомов в очередь
    const albumList = document.getElementById("album-list");
    const queue = document.getElementById("queue");
  
    [albumList, queue].forEach(list => {
      list.addEventListener("dragover", (e) => e.preventDefault());
  
      list.addEventListener("drop", (e) => {
        if (!draggedItem) return;
        e.currentTarget.appendChild(draggedItem);
        draggedItem = null;
      });
    });
  
    // Общая логика для всех перемещаемых элементов
    document.addEventListener("dragstart", (e) => {
      if (e.target.classList.contains("item") || e.target.classList.contains("album")) {
        draggedItem = e.target;
        originContainer = e.target.parentElement;
      }
    });
  
    document.addEventListener("dragend", () => {
      draggedItem = null;
      originContainer = null;
    });
  });
  