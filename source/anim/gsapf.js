export let anim = {
    animationH: function () {
        var menuAnim = gsap.timeline({ paused: true })
        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p4',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        )

        document.querySelectorAll('#p4 .group').forEach(item => {
            const bg = item.querySelector('div.bg-cover');
            const pointer = item.querySelector('.pointer-element');
            item.addEventListener('mouseenter', () => {
                gsap.to(bg, { scale: 1.1, duration: 0.6, ease: "power3.out" });
                gsap.to(pointer, { opacity: 1, duration: 0.3, ease: "power3.out" });
            }); item.addEventListener('mouseleave', () => {
                gsap.to(bg, { scale: 1, duration: 0.6, ease: "power3.out" });
                gsap.to(pointer, { opacity: 0, duration: 0.3, ease: "power3.out" });
            }); 
            
            item.addEventListener('mousemove', e => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                gsap.to(pointer, {
                    x:x - pointer.offsetWidth / 2,
                    y:y - pointer.offsetHeight / 2,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        });        

        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        if (typeof document === 'undefined') return;
        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })
    },


    animGoals: function () {
        gsap.registerPlugin(ScrollTrigger);
        var menuAnim = gsap.timeline({ paused: true })
        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        
        gsap.to('#p3 h1', {
            xPercent: -450,
            scrollTrigger: {
                trigger: '#p3',
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        document.querySelectorAll('.video-container').forEach(container => {
            const video = container.querySelector('video');
            container.addEventListener('mouseenter', () => {
                video.play();
                video.classList.remove('blur-xl');
            });
            container.addEventListener('mouseleave', () => {
                video.pause();
                video.classList.add('blur-xl');
            });
        });

        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p3',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        ); gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );
    },

    animAbout: function () {
        gsap.registerPlugin(ScrollTrigger);
        var menuAnim = gsap.timeline({ paused: true })
        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        
        gsap.to('#p3 h1', {
            xPercent: -550,
            scrollTrigger: {
                trigger: '#p3',
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p3',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        ); gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );
    },

    animqoutes: function () {
        gsap.registerPlugin(ScrollTrigger);
        var menuAnim = gsap.timeline({ paused: true })
        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        
        gsap.to('#p3 h1', {
            xPercent: -450,
            scrollTrigger: {
                trigger: '#p3',
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p3',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        ); gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );
    },
    
    animyingyang: function () {
        gsap.registerPlugin(ScrollTrigger);
        var menuAnim = gsap.timeline({ paused: true })
        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        
        gsap.to('#p3 h1', {
            xPercent: -120,
            scrollTrigger: {
                trigger: '#p3',
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        document.querySelectorAll('.video-container').forEach(container => {
            const video = container.querySelector('video');
            container.addEventListener('mouseenter', () => {
                video.play();
                video.classList.remove('blur-xl');
            });
            container.addEventListener('mouseleave', () => {
                video.pause();
                video.classList.add('blur-xl');
            });
        });

        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p3',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        ); gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );
    },

    peaceOfMind: function () {
        gsap.registerPlugin(ScrollTrigger);
        var menuAnim = gsap.timeline({ paused: true })
        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        
        gsap.to('#p3 h1', {
            xPercent: -350,
            scrollTrigger: {
                trigger: '#p3',
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        document.querySelectorAll('.video-container').forEach(container => {
            const video = container.querySelector('video');
            container.addEventListener('mouseenter', () => {
                video.play();
                video.classList.remove('blur-xl');
            });
            container.addEventListener('mouseleave', () => {
                video.pause();
                video.classList.add('blur-xl');
            });
        });

        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p4',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        ); gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );
    },

    wars: function () {
        gsap.registerPlugin(ScrollTrigger);
        var menuAnim = gsap.timeline({ paused: true })
        menuAnim.to('#menu', {
            left: 0,
            duration: 1,
            ease: "power3.out"
        }); menuAnim.from('#menu button', {
            stagger: 0.3,
            x: -200,
            opacity: 0,
            duration: 0.4
        });

        getById('menuBtn').addEventListener('click', function () {
            menuAnim.play()
        }); 

        getByQS('.menuX').addEventListener('click', function () {
            menuAnim.reverse();
        });

        gsap.fromTo(".anim span",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.4,
                duration: 0.2,
                ease: "power4.out"
            }
        );

        
        gsap.to('#p3 h1', {
            xPercent: -500,
            scrollTrigger: {
                trigger: '#p3',
                start: "top 0%",
                end: "top -100%",
                scrub: 2,
                pin: true
            }
        });

        document.querySelectorAll('.video-container').forEach(container => {
            const video = container.querySelector('video');
            container.addEventListener('mouseenter', () => {
                video.play();
                video.classList.remove('blur-xl');
            });
            container.addEventListener('mouseleave', () => {
                video.pause();
                video.classList.add('blur-xl');
            });
        });

        gsap.to('.marque', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "bounce.out",
            repeat: -1,
        }); gsap.to('.marque2', {
            transform: 'translateX(-100%)',
            duration: 2,
            ease: "elastic.out",
            repeat: -1,
        })

        gsap.fromTo('.animtxt2', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p4',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        ); gsap.fromTo('.animtxt', 
            { y: 120, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#p2',
                    start: 'top 75%',
                    end: 'top 45%',
                    scrub: false
                }
            }
        );
    },
}
