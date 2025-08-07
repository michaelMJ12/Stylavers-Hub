// src/utils/infiniteScroll.ts
export const startInfiniteScroll = (containerId: string, itemClass: string) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = Array.from(container.getElementsByClassName(itemClass)) as HTMLElement[];
  const speed = 1; // pixels per frame

  // Initial positions
  items.forEach((item, i) => {
    item.style.left = `${i * 120}px`; // 100px width + 20px gap
    item.style.position = 'absolute';
  });

  function animate() {
    items.forEach((item) => {
      const currentLeft = parseFloat(item.style.left);
      const newLeft = currentLeft - speed;
      item.style.left = `${newLeft}px`;
    });

    const firstItem = items[0];
    if (parseFloat(firstItem.style.left) + firstItem.offsetWidth < 0) {
      const lastItem = items[items.length - 1];
      firstItem.style.left = `${parseFloat(lastItem.style.left) + lastItem.offsetWidth + 20}px`;
      items.push(items.shift()!); // rotate array
    }

    requestAnimationFrame(animate);
  }

  animate();
};
