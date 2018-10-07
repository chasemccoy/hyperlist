import React from 'react'

const SignupForm = () => (
	<div id="mc_embed_signup" className='box roomy'>
		<form
			action="https://chasem.us19.list-manage.com/subscribe/post?u=b204146be746a61ff69c861f3&amp;id=d9e71d1941"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			className="validate"
			target="_blank"
		>
			<div id="mc_embed_signup_scroll">
				<div className="mc-field-group">
					<label htmlFor="mce-EMAIL">Email Address</label>
					<input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
				</div>

				{/* <div className="mc-field-group">
					<label htmlFor="mce-FNAME">First Name</label>
					<input type="text" defaultValue="" name="FNAME" className="" id="mce-FNAME" />
				</div> */}

				<div id="mce-responses" className="clear">
					<div className="response" id="mce-error-response" style={{display: "none"}}></div>
					<div className="response" id="mce-success-response" style={{display: "none"}}></div>
				</div>

				<div
					style={{position: 'absolute', left: '-5000px'}}
					aria-hidden="true"
				>
					<input type="text" name="b_b204146be746a61ff69c861f3_d9e71d1941" tabIndex="-1" defaultValue="" />
				</div>

				<div className="clear align-horizontal mt24">
					<input type="submit" defaultValue="Let's do this!" name="subscribe" id="mc-embedded-subscribe" className="button" />

					<img src='/static/mailbox.gif'/>
				</div>
			</div>
		</form>
	</div>
)

export default SignupForm
