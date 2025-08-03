import React from 'react'

interface TextOwnProps<E extends React.ElementType> {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  as?: E
}

/**
 * Ang `TextOwnProps` kay usa ka interface nga nag define sa props sa imong Text component.
 * Gigamit ang generic type nga `E` nga nag-extend sa `React.ElementType` — meaning,
 * ang `E` pwede mahimong 'h1', 'p', 'label', 'span', etc. (mga valid HTML or React elements).
 *
 * Optional ang `size`, `color`, ug `as` nga props.
 * Ang `children` kay required — mao na ang sulod sa tag like <Text>some text</Text>.
 */

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

/**
 * Ang `TextProps` kay combination sa imong kaugalingong props (`TextOwnProps`)
 * ug built-in props nga gikan sa `React.ComponentProps<E>`.
 * Pero ato gi-`Omit` or gi-exclude ang mga props nga naa na sa `TextOwnProps` para dili sila mag-conflict.
 */

function Text<E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as,
  ...rest
}: TextProps<E>) {
  /**
   * Nag declare ta og generic type `E` nga by default = 'div' kung wala gi-specify sa paggamit sa component.
   * Ang props nga size, color, children, as — gikan ni tanan sa parent component nga nag gamit sa <Text>.
   */

  const Component = as || 'div'
  /**
   * Kung naay gi-pasa nga `as` prop (like 'h1' or 'label'), gamiton nato na nga tag.
   * Kung wala, default ta sa 'div'.
   */

  return (
    <>
      <Component className={`class-with-${size}-${color}`} {...rest}>
        {children}
      </Component>
      {/**
       * Gamit ang dynamic nga Component tag (like 'h1' or 'label') dinhi.
       * Ang className mag depende sa `size` ug `color` nga props.
       * Example: class-with-lg-primary
       * Ang `...rest` kay para sa uban pa nga built-in props sama sa htmlFor kung label siya.
       */}
    </>
  )
}

export default Text
