const unlayer = window.unlayer.React

const Viewer = () => {
    return unlayer.createViewer(<div><table className="review-form-table-wrapper" style={{ borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%' }}>
        <thead />
        <tbody>
            <tr className="review-form__row review-form__row--rating-label">
                <td colSpan={5} style={{ padding: '0 0 10px' }}>
                    <label className="review-form__label review-form__rating-title-label" style={{ display: 'block', fontWeight: 500, width: '100%' }}>
                        Rating
          </label>
                </td>
            </tr>
            <tr className="review-form__row review-form__row--rating">
                <td className="review-form__rating-cell" style={{ border: 'none', lineHeight: '1.2', padding: '0 0 10px', width: '15%' }} align="center" valign="top">
                    <label className="review-form__rating-label" style={{ display: 'block' }}>
                        <input className="review-form__rating" name="review_rating" type="radio" defaultValue={1} style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, Sans-Serif', fontSize: 14, lineHeight: '1.5', margin: '0 auto 5px' }} />
                        <div className="review-form__rating-star review-form__rating-star--2-lines" style={{ color: '#fec610', fontSize: 16, lineHeight: 2, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★</div>
                    </label>
                </td>
                <td className="review-form__rating-cell" style={{ border: 'none', lineHeight: '1.2', padding: '0 0 10px', width: '20%' }} align="center" valign="top">
                    <label className="review-form__rating-label" style={{ display: 'block' }}>
                        <input className="review-form__rating" name="review_rating" type="radio" defaultValue={2} style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, Sans-Serif', fontSize: 14, lineHeight: '1.5', margin: '0 auto 5px' }} />
                        <div className="review-form__rating-star review-form__rating-star--2-lines" style={{ color: '#fec610', fontSize: 16, lineHeight: 2, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★</div>
                    </label>
                </td>
                <td className="review-form__rating-cell" style={{ border: 'none', lineHeight: '1.2', padding: '0 0 10px', width: '20%' }} align="center" valign="top">
                    <label className="review-form__rating-label" style={{ display: 'block' }}>
                        <input className="review-form__rating" name="review_rating" type="radio" defaultValue={3} style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, Sans-Serif', fontSize: 14, lineHeight: '1.5', margin: '0 auto 5px' }} />
                        <div className="review-form__rating-star" style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★</div>
                        <div className="review-form__rating-star" style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★</div>
                    </label>
                </td>
                <td className="review-form__rating-cell" style={{ border: 'none', lineHeight: '1.2', padding: '0 0 10px', width: '22%' }} align="center" valign="top">
                    <label className="review-form__rating-label" style={{ display: 'block' }}>
                        <input className="review-form__rating" name="review_rating" type="radio" defaultValue={4} style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, Sans-Serif', fontSize: 14, lineHeight: '1.5', margin: '0 auto 5px' }} />
                        <div className="review-form__rating-star" style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★</div>
                        <div className="review-form__rating-star" style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★</div>
                    </label>
                </td>
                <td className="review-form__rating-cell" style={{ border: 'none', lineHeight: '1.2', padding: '0 0 10px', width: '23%' }} align="center" valign="top">
                    <label className="review-form__rating-label" style={{ display: 'block' }}>
                        <input className="review-form__rating" name="review_rating" type="radio" defaultValue={5} defaultChecked="checked" style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, Sans-Serif', fontSize: 14, lineHeight: '1.5', margin: '0 auto 5px' }} />
                        <div className="review-form__rating-star" style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★★</div>
                        <div className="review-form__rating-star" style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★</div>
                    </label>
                </td>
            </tr>
        </tbody>
    </table>
    </div>)
}

unlayer.registerTool({
    name: 'my_tool',
    label: 'My Tool',
    icon: 'fa-smile',
    supportedDisplayModes: ['web', 'email'],
    options: {},
    values: {},
    renderer: {
      Viewer: Viewer,
      exporters: {
        web: function (values) {
          return '<div>I am a custom tool.</div>';
        },
        email: function (values) {
          return '<div>I am a custom tool.</div>';
        },
      },
      head: {
        css: function (values) {},
        js: function (values) {},
      },
    },
  });
