<script lang="ts">
	import ShineBorder from "#lib/components/magic/shine-border/shine-border.svelte";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import { Input } from "#lib/components/ui/input/index.js";
	import { Label } from "#lib/components/ui/label/index.js";
	// For Light and Dark Mode
	import { mode } from "mode-watcher";
</script>

<Card.Root class="relative mx-auto max-w-87 overflow-hidden">
	<ShineBorder shineColor={mode.current === "dark" ? "white" : "black"} />
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your credentials to access your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="name@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">Sign In</Button>
	</Card.Footer>
</Card.Root>
