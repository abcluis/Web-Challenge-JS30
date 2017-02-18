
        const inputs = document.querySelectorAll('.container input');
        
        inputs.forEach(input =>input.addEventListener('change',Actualizacion));
        inputs.forEach(input =>input.addEventListener('mousemove',Actualizacion));
        
        function Actualizacion(){
            const value = this.value;
            const sizing = this.dataset.sizing||'';
            document.documentElement.style.setProperty(`--${this.name}`,value+sizing);
        }
        