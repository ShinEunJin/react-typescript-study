interface TemplateProps {
  children: React.ReactNode;
}

const Template = (props: TemplateProps) => {
  return (
    <div className="background">
      <div className="survey-container">{props.children}</div>
    </div>
  );
};

export default Template;
