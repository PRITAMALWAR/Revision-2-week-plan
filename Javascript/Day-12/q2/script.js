const tasks = [
  { id: 1, text: 'Complete project proposal' },
  { id: 2, text: 'Review code submissions' },
  { id: 3, text: 'Update documentation' },
  { id: 4, text: 'Team meeting' }
];

const list = document.getElementById("taskList");
let draggedItem = null;

function renderList() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const dropZone = createDropZone(index);
    list.appendChild(dropZone);

    const li = document.createElement("li");
    li.textContent = task.text;
    li.draggable = true;

    li.addEventListener("dragstart", () => {
      draggedItem = index;
      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      draggedItem = null;
      li.classList.remove("dragging");
      clearDropZones();
    });

    list.appendChild(li);
  });

  list.appendChild(createDropZone(tasks.length));
}

function createDropZone(index) {
  const zone = document.createElement("div");
  zone.className = "drop-zone";

  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("active");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("active");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("active");

    if (draggedItem === null || draggedItem === index) return;

    const item = tasks.splice(draggedItem, 1)[0];
    tasks.splice(index > draggedItem ? index - 1 : index, 0, item);

    renderList();
  });

  return zone;
}

function clearDropZones() {
  document.querySelectorAll(".drop-zone").forEach(zone =>
    zone.classList.remove("active")
  );
}

renderList();
