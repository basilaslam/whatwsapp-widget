(function(global) {
    function initializeWhatsAppWidget({ phoneNumber, message = '', position = 'bottom-right' }) {
      const whatsappIcon = document.createElement('a');
      whatsappIcon.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      whatsappIcon.target = '_blank';
      whatsappIcon.style.position = 'fixed';
      whatsappIcon.style.width = '50px';
      whatsappIcon.style.height = '50px';
      whatsappIcon.style.backgroundColor = '#25D366';
      whatsappIcon.style.borderRadius = '50%';
      whatsappIcon.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
      whatsappIcon.style.display = 'flex';
      whatsappIcon.style.justifyContent = 'center';
      whatsappIcon.style.alignItems = 'center';
      whatsappIcon.style.textDecoration = 'none';
      whatsappIcon.style.zIndex = '1000';
  
      // Check if device is mobile using screen width
      const isMobile = window.innerWidth <= 768;
      const mobileBottomOffset = '100px';
      const desktopOffset = '20px';
  
      if (position === 'bottom-right') {
        whatsappIcon.style.right = '20px';
        whatsappIcon.style.bottom = isMobile ? mobileBottomOffset : desktopOffset;
      } else if (position === 'bottom-left') {
        whatsappIcon.style.left = '20px';
        whatsappIcon.style.bottom = isMobile ? mobileBottomOffset : desktopOffset;
      } else if (position === 'top-right') {
        whatsappIcon.style.top = '20px';
        whatsappIcon.style.right = '20px';
      } else if (position === 'top-left') {
        whatsappIcon.style.top = '20px';
        whatsappIcon.style.left = '20px';
      }
  
      const iconImage = document.createElement('img');
      iconImage.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
      iconImage.alt = 'WhatsApp';
      iconImage.style.width = '60%';
      iconImage.style.height = '60%';
      
      whatsappIcon.appendChild(iconImage);
      document.body.appendChild(whatsappIcon);
  
      // Update position on resize
      window.addEventListener('resize', () => {
        const isNowMobile = window.innerWidth <= 768;
        if (position === 'bottom-right' || position === 'bottom-left') {
          whatsappIcon.style.bottom = isNowMobile ? mobileBottomOffset : desktopOffset;
        }
      });
    }
  
    global.initializeWhatsAppWidget = initializeWhatsAppWidget;
  })(window);