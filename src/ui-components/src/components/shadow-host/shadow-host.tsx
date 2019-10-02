import '@ionic/core';
import { Component, Host, h } from '@stencil/core';

@Component({
	tag: 'rjs-shadow-host',
	styleUrl: 'shadow-host.css',
	shadow: true,
})
export class RjsShadowHost {
	render() {
		return (
			<Host>
				<p>There should be a blue border and orange background.</p>
				<ion-list>
					<ion-item>
						This is an ion-list and it should have a red background.
					</ion-item>
					<ion-item>
						The blue border and red background do not appear in Firefox or
						Safari because the ion-list styles replace the parent component
						styles.
					</ion-item>
					<ion-item>
						If you remove the ion-list (eg. change it to a DIV), the styles
						appear as they should in both Firefox and Safari.
					</ion-item>
				</ion-list>
			</Host>
		);
	}
}
