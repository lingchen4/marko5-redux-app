import template from "./template.marko";

export default (req, res) => {
  res.marko(template, {
      PRELOADED_STATE: {
        value: Number(req.query.value),
      }
  });
};
