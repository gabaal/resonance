import { prefetch, trpc } from "@/trpc/server";
import { HealthCheck } from "./health-check";


export default function TestPage() {
    prefetch(trpc.health.queryOptions())
    return <HealthCheck/>
}