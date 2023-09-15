type TypographyTypes = 'label' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface ITypographyProps {
  type: TypographyTypes;
  children?: string | React.ReactNode;
  className?: string;
}

function Typography(props: ITypographyProps) {
  const { type, children, className } = props;

  var Element = type;

  return <Element className={className}>{children}</Element>;
}

export default Typography;
