<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<form
	class="bg-card mx-auto w-full max-w-sm space-y-5 rounded-xl border p-6 shadow-sm"
	onsubmit={(event) => event.preventDefault()}
>
	<div class="space-y-1 text-center">
		<h3 class="text-xl font-semibold">Create an account</h3>
		<p class="text-muted-foreground text-sm">Enter your details to get started.</p>
	</div>

	<div class="space-y-4">
		<div class="space-y-2">
			<Label for="signup-name">Name</Label>
			<Input id="signup-name" name="name" placeholder="Jane Doe" autocomplete="name" required />
		</div>
		<div class="space-y-2">
			<Label for="signup-email">Email</Label>
			<Input
				id="signup-email"
				name="email"
				type="email"
				placeholder="jane@example.com"
				autocomplete="email"
				required
			/>
		</div>
		<div class="space-y-2">
			<Label for="signup-password">Password</Label>
			<Input
				id="signup-password"
				name="password"
				type="password"
				autocomplete="new-password"
				required
			/>
		</div>
		<Button type="submit" class="w-full">Create account</Button>
	</div>

	<Separator textClass="text-muted-foreground text-xs">Or sign up with</Separator>

	<div class="grid grid-cols-2 gap-3">
		<Button type="button" variant="outline">Google</Button>
		<Button type="button" variant="outline">GitHub</Button>
	</div>
</form>
