<script lang="ts">
	import { BorderBeam } from "#lib/components/magic/border-beam/index.js";
	import Button from "#lib/components/ui/button/button.svelte";
	import * as Card from "#lib/components/ui/card/index.js";
	import Input from "#lib/components/ui/input/input.svelte";
	import Label from "#lib/components/ui/label/label.svelte";
</script>

<Card.Root class="relative w-87.5 overflow-hidden">
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your credentials to access your account.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Enter your email" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="Enter your password" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<Button variant="outline">Register</Button>
		<Button>Login</Button>
	</Card.Footer>
	<BorderBeam
		duration={4}
		size={300}
		reverse
		class="from-transparent via-green-500 to-transparent"
	/>
</Card.Root>
