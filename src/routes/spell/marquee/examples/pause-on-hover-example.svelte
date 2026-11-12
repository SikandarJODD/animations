<script lang="ts">
	import { Marquee } from "#lib/components/spell/marquee/index.js";
	import { Avatar, AvatarImage, AvatarFallback } from "#lib/components/ui/avatar/index.js";
	const users = [
		{ id: "alice", name: "Alice", role: "Product Manager", initials: "AL" },
		{ id: "bob", name: "Bob", role: "Software Engineer", initials: "BO" },
		{ id: "carol", name: "Carol", role: "UX Designer", initials: "CA" },
		{ id: "david", name: "David", role: "Data Scientist", initials: "DA" },
		{ id: "emma", name: "Emma", role: "Marketing Lead", initials: "EM" },
		{ id: "frank", name: "Frank", role: "DevOps Engineer", initials: "FR" },
		{ id: "grace", name: "Grace", role: "Design Engineer", initials: "GR" },
		{ id: "henry", name: "Henry", role: "QA Specialist", initials: "HE" },
	];
</script>

<Marquee pauseOnHover class="py-4">
	{#each users as user}
		<div class="mx-2 flex gap-3 rounded-md border p-3 shadow-xs">
			<Avatar class="my-auto size-9 border">
				<AvatarImage
					src={`https://api.dicebear.com/9.x/dylan/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${user.id}`}
					alt={`@${user.id}`}
				/>
				<AvatarFallback>{user.initials}</AvatarFallback>
			</Avatar>
			<div class="flex flex-col justify-between">
				<p class="text-sm font-medium">{user.name}</p>
				<p class="text-muted-foreground text-xs">{user.role}</p>
			</div>
		</div>
	{/each}
</Marquee>
