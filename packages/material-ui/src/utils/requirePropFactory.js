// @flow weak

function requirePropFactory(componentNameInError: string) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }

  const requireProp = (requiredProp: string) => (
    props: Object,
    propName: string,
    componentName?: string,
    location?: string,
    propFullName?: string,
  ) => {
    const propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(
        `The property \`${propFullNameSafe}\` of ` +
          `\`${componentNameInError}\` must be used on \`${requiredProp}\`.`,
      );
    }

    return null;
  };
  return requireProp;
}

export default requirePropFactory;
