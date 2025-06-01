// Real-time Portfolio Features
class PortfolioApp {
  constructor() {
    this.currentSection = "home"
    this.isScrolling = false
    this.init()
  }

  init() {
    this.setupEventListeners()
    this.setupIntersectionObserver()
    this.startTypewriter()
    this.setupSkillsAnimation()
    this.setupScrollAnimations()
    this.setupContactForm()
    this.setupMobileMenu()
  }

  setupEventListeners() {
    // Smooth scroll navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href").substring(1)
        this.scrollToSection(targetId)
      })
    })

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar")
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })

    // Real-time scroll position tracking
    window.addEventListener(
      "scroll",
      this.throttle(() => {
        this.updateActiveNavLink()
      }, 100),
    )
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.3,
      rootMargin: "-50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate elements when they come into view
          const animateElements = entry.target.querySelectorAll("[data-aos]")
          animateElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate")
            }, index * 100)
          })

          // Trigger skills animation when about section is visible
          if (entry.target.id === "about") {
            this.animateSkills()
          }

          // Animate project cards
          if (entry.target.id === "projects") {
            this.animateProjectCards()
          }

          // Animate timeline items
          if (entry.target.id === "experience") {
            this.animateTimeline()
          }
        }
      })
    }, options)

    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section)
    })
  }

  // Real-time typewriter effect
  startTypewriter() {
    const nameElement = document.getElementById("typewriter-name")
    const titleElement = document.getElementById("typewriter-title")

    const name = "Surya Prakash Reddy Bhavanam"
    const title = "Full Stack Developer & Problem Solver"

    this.typeWriter(nameElement, name, 100, () => {
      setTimeout(() => {
        this.typeWriter(titleElement, title, 80)
      }, 500)
    })
  }

  typeWriter(element, text, speed, callback) {
    let i = 0
    element.innerHTML = ""

    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
      } else {
        clearInterval(timer)
        if (callback) callback()
      }
    }, speed)
  }

  // Real-time skills animation
  setupSkillsAnimation() {
    this.skillsAnimated = false
  }

  animateSkills() {
    if (this.skillsAnimated) return
    this.skillsAnimated = true

    const skillBars = document.querySelectorAll(".skill-progress")
    const skillPercentages = document.querySelectorAll(".skill-percentage")

    skillBars.forEach((bar, index) => {
      const targetWidth = bar.getAttribute("data-width")
      const percentageElement = skillPercentages[index]
      const targetPercentage = percentageElement.getAttribute("data-percentage")

      setTimeout(() => {
        // Animate progress bar
        bar.style.width = targetWidth + "%"

        // Animate percentage counter
        this.animateCounter(percentageElement, 0, Number.parseInt(targetPercentage), 2000)
      }, index * 200)
    })
  }

  animateCounter(element, start, end, duration) {
    const range = end - start
    const increment = range / (duration / 16)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      element.textContent = Math.floor(current) + "%"
    }, 16)
  }

  // Animate project cards
  animateProjectCards() {
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate")
      }, index * 200)
    })
  }

  // Animate timeline items
  animateTimeline() {
    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animate")
      }, index * 300)
    })
  }

  // Scroll animations setup
  setupScrollAnimations() {
    const animateElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((el) => observer.observe(el))
  }

  // Real-time contact form handling
  setupContactForm() {
    const form = document.getElementById("contact-form")

    form.addEventListener("submit", async (e) => {
      e.preventDefault()

      const submitBtn = form.querySelector(".btn")
      const formData = new FormData(form)

      // Show loading state
      submitBtn.classList.add("loading")

      try {
        // Simulate form submission
        await this.simulateFormSubmission(formData)

        // Show success message
        this.showToast("Message sent successfully!", "success")
        form.reset()
      } catch (error) {
        // Show error message
        this.showToast("Failed to send message. Please try again.", "error")
      } finally {
        // Remove loading state
        submitBtn.classList.remove("loading")
      }
    })

    // Real-time form validation
    const inputs = form.querySelectorAll("input, textarea")
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this.validateField(input)
      })
    })
  }

  async simulateFormSubmission(formData) {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }

  validateField(field) {
    const value = field.value.trim()
    let isValid = true

    // Remove existing error styling
    field.classList.remove("error")

    // Validation rules
    switch (field.type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        isValid = emailRegex.test(value)
        break
      case "text":
        isValid = value.length >= 2
        break
      default:
        isValid = value.length > 0
    }

    // Apply error styling if invalid
    if (!isValid && value.length > 0) {
      field.classList.add("error")
    }

    return isValid
  }

  // Toast notification system
  showToast(message, type = "success") {
    const toast = document.getElementById("toast")
    const messageElement = toast.querySelector(".toast-message")

    messageElement.textContent = message
    toast.className = `toast ${type}`
    toast.classList.add("show")

    setTimeout(() => {
      toast.classList.remove("show")
    }, 4000)
  }

  // Mobile menu functionality
  setupMobileMenu() {
    const hamburger = document.getElementById("hamburger")
    const navMenu = document.getElementById("nav-menu")

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }

  // Smooth scroll to section
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 70 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Update active navigation link based on scroll position
  updateActiveNavLink() {
    const sections = document.querySelectorAll(".section")
    const navLinks = document.querySelectorAll(".nav-link")

    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id")
      }
    })

    // Update active nav link
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active")
      }
    })
  }

  // Utility function for throttling
  throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
}

// Global scroll function for buttons
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 70
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp()
})

// Add CSS for form validation
const style = document.createElement("style")
style.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
`
document.head.appendChild(style)
