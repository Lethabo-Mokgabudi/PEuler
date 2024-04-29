const tabs=document.querySelectorAll('.nav-link');
        const all_content=document.querySelectorAll('.content');

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                

                all_content.forEach(content=>{content.classList.remove('active')});
                all_content[index].classList.add('active');
            })
        });

        /////////////CALCULATE MULTIPLES//////////////
        function calcM() {
            var num = parseInt(document.getElementById('num-input1').value);
            var sum = 0;

            for (let i = 0; i < num; i++) {
                if ((i % 3) === 0 || (i % 5) === 0) {
                    sum += i;
                }
            }
        document.getElementById('answer').textContent = sum.toString();
        }

        //////////////////CALCULATE SUM OF EVEN FIBONACCI VALUES////////////////////
        function calcF() {
            var num = parseInt(document.getElementById('num-input2').value);
            var num1 = 0;
            var num2 = 1;
            var seq = 0;
            var sum = 0;
            var fib =[];
            var fibIndex = 0;

            while (seq < num) {
                seq = num1 + num2;
                fib[fibIndex] = seq;
                num2 = num1;
                num1 = seq;
                
                
                fibIndex++;
            }

            for(let i=0;i<fibIndex; i++)
            {
                if(fib[i]%2===0)
                {
                    sum+=fib[i];
                }
            }
            
            document.getElementById('answer2').textContent = sum.toString();
        }

        /////////////////CALCULATE LARGEST PRIME FACTOR////////////////////
        function calcPF() {
            var num = parseInt(document.getElementById('num-input3').value);
            var factor = 2;
            var primeFactor = 0;

            while (factor <= num) {
                if (num % factor === 0) {
                    num = num / factor;
                    primeFactor = factor;
                } else {
                    factor++;
                }
            }

            document.getElementById('answer3').textContent = primeFactor.toString();
        }