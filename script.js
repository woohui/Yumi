document.addEventListener('DOMContentLoaded', function() {
    // 提示框自动消失
    const notification = document.getElementById('notification');
    const closeBtn = document.querySelector('.notification-close');
    
    if (notification && closeBtn) {
        // 关闭按钮点击事件
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            hideNotification();
        });
        
        // 5秒后自动消失
        setTimeout(() => {
            hideNotification();
        }, 5000);
    }
    
    function hideNotification() {
        if (notification) {
            notification.classList.add('hide');
            setTimeout(() => {
                notification.style.display = 'none';
            }, 400);
        }
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const domainCards = document.querySelector('main > .container');
    let cards = document.querySelectorAll('.card:not(.sold)');
    const soldCard = document.querySelector('.card.sold');
    const soldTitle = document.querySelector('.sold-title');
    const soldSection = document.querySelector('.sold-section');
    let currentFilter = 'all'; // 记录当前筛选

    function applyFilter(filter) {
        currentFilter = filter;
        cards.forEach(card => {
            const suffix = card.getAttribute('data-suffix');
            let show = false;

            if (filter === 'all') {
                show = true;
            } else {
                show = suffix === filter;
            }

            card.style.display = show ? 'block' : 'none';
        });
        
        // 已售出的卡片只在全部筛选时显示
        if (filter === 'all' && soldCard) {
            soldCard.style.display = 'block';
        } else if (soldCard) {
            soldCard.style.display = 'none';
        }
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    // Sort functionality
    sortSelect.addEventListener('change', function() {
        const sortType = this.value;
        // 只排序当前显示的卡片
        const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');
        
        if (sortType === 'default') {
            // 默认排序时不重新排列
            return;
        }
        
        visibleCards.sort((a, b) => {
            const aTitle = a.querySelector('h3').textContent;
            const bTitle = b.querySelector('h3').textContent;
            const aPrice = parseInt(a.getAttribute('data-price'));
            const bPrice = parseInt(b.getAttribute('data-price'));
            const aExpiry = new Date(a.getAttribute('data-expiry'));
            const bExpiry = new Date(b.getAttribute('data-expiry'));
            
            // 提取域名前缀（不含后缀）
            const aPrefix = aTitle.split('.')[0];
            const bPrefix = bTitle.split('.')[0];

            switch(sortType) {
                case 'price-asc':
                    return aPrice - bPrice;
                case 'price-desc':
                    return bPrice - aPrice;
                case 'length-asc':
                    return aPrefix.length - bPrefix.length;
                case 'length-desc':
                    return bPrefix.length - aPrefix.length;
                case 'expiry-asc':
                    return aExpiry - bExpiry;
                case 'expiry-desc':
                    return bExpiry - aExpiry;
                default:
                    return 0;
            }
        });

        // Re-append sorted cards to the container
        visibleCards.forEach(card => {
            domainCards.appendChild(card);
        });
    });

    // 邮件复制功能
    const emailText = document.getElementById('email-text');
    const headerEmail = document.getElementById('header-email');
    
    function setupEmailCopy(element) {
        if (element) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const email = 'i@yumi.sale';
                copyToClipboard(email, element);
            });
        }
    }
    
    setupEmailCopy(emailText);
    setupEmailCopy(headerEmail);

    // 统一复制功能，优先使用备用方案以兼容 Safari
    function copyToClipboard(text, element) {
        if (!text) return;
        
        console.log('开始复制:', text);
        
        // 策略1: 优先尝试 execCommand（最稳定）
        if (copyViaExecCommand(text, element)) {
            console.log('execCommand 复制成功');
            return;
        }
        
        // 策略2: 降级到 Clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Clipboard API 复制成功');
                    showCopySuccess(element);
                })
                .catch((err) => {
                    console.error('Clipboard API 失败:', err);
                    // 都失败了，尝试用 alert 提示
                    alert('复制失败，邮箱地址为: ' + text);
                });
        } else {
            console.warn('Clipboard API 不可用');
            alert('复制失败，邮箱地址为: ' + text);
        }
    }

    // 通过 execCommand 复制（最稳定的方案）
    function copyViaExecCommand(text, element) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        
        // 设置样式确保完全不可见但可操作
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';
        textarea.style.pointerEvents = 'none';
        
        document.body.appendChild(textarea);
        
        try {
            // 确保 textarea 获得焦点
            textarea.focus();
            textarea.select();
            
            // 尝试复制
            const success = document.execCommand('copy');
            
            if (success) {
                showCopySuccess(element);
            }
            
            return success;
        } catch (err) {
            console.error('execCommand 异常:', err);
            return false;
        } finally {
            // 清理
            setTimeout(() => {
                if (document.body.contains(textarea)) {
                    document.body.removeChild(textarea);
                }
            }, 0);
        }
    }

    // 显示复制成功的反馈
    function showCopySuccess(element) {
        const originalText = element.textContent;
        element.textContent = '✓ 已复制';
        element.classList.add('copied');
        
        setTimeout(() => {
            element.textContent = originalText;
            element.classList.remove('copied');
        }, 3000);
    }
});
