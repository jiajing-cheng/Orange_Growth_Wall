// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. 获取所有功能区卡片
  const featureCards = document.querySelectorAll('.feature-card');

  // 2. 为每个卡片添加点击事件监听器
  featureCards.forEach(card => {
    card.addEventListener('click', (event) => {
      // 获取当前卡片的标题，用于匹配目标区域的ID
      const cardTitle = card.querySelector('h3').textContent.trim();

      // 根据标题映射到对应的目标ID
      // 这里建立一个简单的映射关系，你可以根据实际情况修改
      const targetIdMap = {
        '成长里程碑': 'milestones',
        '成长数据': 'growth-data',
        '艺术相册': 'gallery',
        '家庭大事记': 'family-events',
        '父母日志': 'parent-blog'
      };

      const targetId = targetIdMap[cardTitle];

      if (targetId) {
        // 找到目标元素
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // 使用浏览器原生的平滑滚动 API
          targetElement.scrollIntoView({
            behavior: 'smooth', // 启用平滑滚动动画
            block: 'start'      // 滚动到元素的顶部
          });
        } else {
          console.warn(`未找到ID为 '${targetId}' 的目标元素`);
        }
      } else {
        console.warn(`未为卡片 '${cardTitle}' 配置跳转目标`);
      }
    });
  });
});