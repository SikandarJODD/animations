<script>
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import { Input } from "#lib/components/ui/input/index.js";
	import { Label } from "#lib/components/ui/label/index.js";
	import { mode } from "mode-watcher";
</script>

<Card.Root class="w-full max-w-sm border-none p-0 shadow-none">
	<MagicCard
		gradientSize={160}
		gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
		class="p-0"
	>
		<Card.Header class="border-border border-b p-4 [.border-b]:pb-4">
			<Card.Title>Login</Card.Title>
			<Card.Description>Enter your credentials to access your account</Card.Description>
		</Card.Header>
		<Card.Content class="p-4">
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
		<Card.Footer class="border-border border-t p-4 [.border-t]:pt-4">
			<Button class="w-full">Sign In</Button>
		</Card.Footer>
	</MagicCard>
</Card.Root>
