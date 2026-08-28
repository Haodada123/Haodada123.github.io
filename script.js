const yearNode = document.querySelector('#year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const railLinks = Array.from(document.querySelectorAll('.section-rail a'));
const sectionIds = railLinks.map(link => link.dataset.section);
const observedSections = sectionIds
  .map(id => document.getElementById(id))
  .filter(Boolean);

const setActiveRail = (id) => {
  railLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === id);
  });
};

if (observedSections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible[0]) {
      setActiveRail(visible[0].target.id);
    }
  }, {
    threshold: [0.2, 0.45, 0.7],
    rootMargin: '-10% 0px -45% 0px'
  });

  observedSections.forEach(section => observer.observe(section));
  setActiveRail(observedSections[0].id);
}
