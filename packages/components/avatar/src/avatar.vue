<script>
export default {
  name: 'ScrewAvatar',
  props: {
    size: {
      type: [String, Number],
      validator: val => {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator: val => ['circle', 'square'].includes(val)
    },
    icon: String,
    src: String,
    alt: String,
    fit: {
      type: String,
      default: 'cover'
    }
  },
  computed: {
    classnames() {
      const { size, shape, icon } = this
      const classList = ['sw-avatar']

      if (size) {
        classList.push(`sw-avatar--${size}`)
      }

      if (shape) {
        classList.push(`sw-avatar--${shape}`)
      }

      if (icon) {
        classList.push('sw-avatar--icon')
      }

      return classList.join(' ')
    }
  },
  methods: {
    renderAvatar() {
      const { src, alt, fit } = this
      return <img src={src} alt={alt} style={{ 'object-fit': fit }} />
    }
  },
  render() {
    const { classnames, size } = this

    const style = typeof size === 'number' ? {
      width: `${size}px`,
      height: `${size}px`,
      lineHeight: `${size}px`
    } : {}

    return <span class={classnames} style={style}>{this.renderAvatar()}</span>
  }
}
</script>
